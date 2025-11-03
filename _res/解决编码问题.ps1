cd w:\


# 1. 遍历当前目录及子目录下的所有目标文件（可修改-Include的扩展名）
Get-ChildItem -Path . -Include *.html, *.txt, *.js, *.css, *.json -Recurse | ForEach-Object {
    
    # 2. 定义文件路径
    $filePath = $_.FullName
    
    # 3. 用StreamReader自动检测编码，读取文件内容（关键！）
    $reader = New-Object System.IO.StreamReader($filePath)
    $content = $reader.ReadToEnd()  # 自动处理任意原编码
    $reader.Close()  # 关闭流，释放资源
    
    # 4. 将内容写入文件（强制转成UTF-8无BOM）
    Set-Content -Path $filePath -Value $content -Encoding UTF8 -Force
}

# 提示完成
Write-Host "所有文件已转成UTF-8无BOM！" -ForegroundColor Green