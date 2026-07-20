Add-Type -AssemblyName System.Drawing
1..10 | ForEach-Object {
    $p = "C:\xampp\htdocs\portfolio_vite+react\portfolio_vite\scratch\photos\photo_" + $_ + ".jpg"
    if (Test-Path $p) {
        $bmp = [System.Drawing.Bitmap]::new($p)
        $c1 = $bmp.GetPixel(100, 100)
        $c2 = $bmp.GetPixel([int]($bmp.Width/2), [int]($bmp.Height/2))
        $c3 = $bmp.GetPixel([int]($bmp.Width/4), [int]($bmp.Height/4))
        $c4 = $bmp.GetPixel([int]($bmp.Width*3/4), [int]($bmp.Height*3/4))
        $summary = "ID=" + $_ + " W=" + $bmp.Width + " H=" + $bmp.Height + " C1=" + $c1.Name + " C2=" + $c2.Name + " C3=" + $c3.Name + " C4=" + $c4.Name
        Write-Output $summary
        $bmp.Dispose()
    }
}
