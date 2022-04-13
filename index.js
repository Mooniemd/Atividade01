class Noticia{ 
    constructor(titulo, dataPubli, resumo, texto)
    { 
      this.titulo = titulo; 
      this.dataPubli = dataPubli; 
      this.resumo = resumo; 
      this.texto = texto; }

divulgarNoticia(){ 
    console.log(this.titulo + "\n" + this.dataPubli + "\n" + this.resumo + "\n\n" + this.texto); 
} 
}

//let noti = new Noticia("Atenção atenção, você caiu no pão!", "28/12/2005", "ele caiu no pão.", "top10textosdosanimes"); noti.divulgarNoticia();

class NoticiaDestaque extends Noticia{
    constructor(imagemDestaque, titulo, dataPubli, resumo, texto){ 
    super(titulo, dataPubli, resumo, texto)
    this.imagemDestaque = imagemDestaque

    }

MostrarDestaque(){
    return this.imagemDestaque + "\n" + this.titulo + "\n" + this.dataPubli + "\n" + this.resumo + "\n\n" + this.texto
}
}
let img = new NoticiaDestaque("https://www.wepc.com/wp-content/uploads/2022/02/Webp.net-resizeimage56.jpg", "titulo foda", "28/12/2005", "imagens fortes de morte em jogo 3d", "textofodatextofodatextofodatextofodatextofodatextofodatextofodatextofodatextofodatextofodatextofodatextofodatextofoda");
console.log(img.MostrarDestaque())