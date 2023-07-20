# gits-test

#kompleksitas pada code balanced bracket

1. Iterasi melalui string:
   - Kompleksitas: O(n)
   - Karena kita melakukan iterasi satu per satu pada setiap karakter dalam string input, kompleksitasnya sebanding dengan panjang string, yaitu O(n), di mana n adalah panjang string.

2. Operasi push dan pop pada stack:
   - Kompleksitas: O(n)
   - Pada setiap iterasi, fungsi melakukan operasi push dan pop pada stack. Operasi push dan pop pada tumpukan biasanya berjalan dalam waktu konstan O(1).

3. Operasi mencari indeks dalam objek `brackets`:
   - Kompleksitas: O(1)
   - Fungsi menggunakan objek `brackets` untuk mencocokkan bracket buka dengan bracket tutup. Operasi mencari indeks dalam objek menggunakan indeks hashing yang berjalan dalam waktu konstan O(1).

Karena dalam kompleksitas O(n) dan O(1), kompleksitas terbesar adalah O(n). Dengan demikian, kompleksitas keseluruhan dari fungsi `isBalancedBracket` adalah O(n).
