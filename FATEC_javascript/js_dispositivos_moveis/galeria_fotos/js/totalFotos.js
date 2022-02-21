function fotos(){
	var valor = Math.floor((Math.random() * 18) + 1);
	valor = (valor%2==0)? valor : valor+1;
	return valor;
}