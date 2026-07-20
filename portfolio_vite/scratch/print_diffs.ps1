Add-Type -AssemblyName System.Drawing
$bmps = @{}
1..10 | ForEach-Object {
    $p = "C:\xampp\htdocs\portfolio_vite+react\portfolio_vite\scratch\photos\photo_" + $_ + ".jpg"
    if (Test-Path $p) {
        $orig = [System.Drawing.Bitmap]::new($p)
        $thumb = [System.Drawing.Bitmap]::new($orig, 16, 16)
        $bmps[$_] = $thumb
        $orig.Dispose()
    }
}

$results = @()
for ($i = 1; $i -le 10; $i++) {
    for ($j = $i + 1; $j -le 10; $j++) {
        $diff = 0
        for ($x = 0; $x -lt 16; $x++) {
            for ($y = 0; $y -lt 16; $y++) {
                $c1 = $bmps[$i].GetPixel($x, $y)
                $c2 = $bmps[$j].GetPixel($x, $y)
                $diff += [Math]::Abs($c1.R - $c2.R) + [Math]::Abs($c1.G - $c2.G) + [Math]::Abs($c1.B - $c2.B)
            }
        }
        $avgDiff = [Math]::Round($diff / (16 * 16 * 3), 1)
        $results += [PSCustomObject]@{ Pair = "$i vs $j"; Diff = $avgDiff }
    }
}
$results | Sort-Object Diff | Select-Object -First 10 | ForEach-Object { Write-Output ($_.Pair + " => " + $_.Diff) }
$bmps.Values | ForEach-Object { $_.Dispose() }
