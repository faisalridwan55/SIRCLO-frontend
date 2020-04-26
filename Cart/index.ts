type Product = { kodeProduk: string; kuantitas: number };

class Cart {
  private productList: { [kodeProduk: string]: Product["kuantitas"] } = {};

  tambahProduk = (
    kodeProduk: Product["kodeProduk"],
    kuantitas: Product["kuantitas"]
  ) => {
    if (this.productList.hasOwnProperty(kodeProduk))
      this.productList[kodeProduk] = this.productList[kodeProduk] + kuantitas;
    else this.productList[kodeProduk] = kuantitas;
  };

  hapusProduk = (kodeProduk: Product["kodeProduk"]) =>
    delete this.productList[kodeProduk];

  tampilkanCart = () =>
    Object.keys(this.productList).map((kodeProduk) =>
      console.log(`${kodeProduk} (${this.productList[kodeProduk]})`)
    );
}

const keranjang: Cart = new Cart();

keranjang.tambahProduk("Pisang Hijau", 2);

keranjang.tambahProduk("Semangka Kuning", 3);

keranjang.tambahProduk("Apel Merah", 1);
keranjang.tambahProduk("Apel Merah", 4);
keranjang.tambahProduk("Apel Merah", 2);

keranjang.hapusProduk("Semangka Kuning");

keranjang.hapusProduk("Semangka Merah");

keranjang.tampilkanCart();