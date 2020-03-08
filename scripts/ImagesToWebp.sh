for file in *.png
do 
cwebp -q 80 "$file" -o "${file%.png}.webp"
done

for file in *.jpg
do 
cwebp -q 80 "$file" -o "${file%.jpg}.webp"
done