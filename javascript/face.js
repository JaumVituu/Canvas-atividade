var canvas = document.getElementById('formatos');

isHappy = new Boolean(true);//define variável à ser usada posteriormente

function HappyFace()
{
	if (canvas.getContext){
		/*ATENÇÃO!!!! aqui encontrei um erro ao utilizar o gradiente, 
		tentei contorná-lo com o try/catch, mas não resolveu nada
		var ctx = canvas.getContext('2d');
		ctx.beginPath();
		ctx.arc(100, 100, 40, 0,2*Math.PI);
		ctx.lineWidth = 10;
		ctx.stroke();
		ctx.strokeStyle = "black";
		try{
			var grd = ctx.createLinearGradient(0,0,200,0);
			grd.addColorStop(0, "red");​
			grd.addColorStop(1, "white");
			ctx.fillStyle = "grd";
			throw new Error("Gradiente não encontrado");
		}
		catch(e){
			console.log("Um erro ao aplicar o gradiente foi encontrado, então foi adicionada somenete uma cor solida");
			ctx.fillStyle="red";
		}
		finally{
			ctx.fill();
			ctx.moveTo(100,110);
			ctx.arc(100,110, 20, 0, Math.PI);
			ctx.lineTo(100,110);
			ctx.lineWidth = 2;
			ctx.moveTo(100,100);
			ctx.lineTo(100,102);
			ctx.moveTo(90,90);
			ctx.arc(90,90,2,0,2*Math.PI);
			ctx.moveTo(110,90);
			ctx.arc(110,90,2,0,2*Math.PI);
			ctx.stroke();
		}*/
		var ctx = canvas.getContext('2d');
		ctx.beginPath();
		ctx.arc(100, 100, 40, 0,2*Math.PI); //desenho o círculo do rosto
		ctx.lineWidth = 10;//defino largura
		ctx.stroke();
		ctx.strokeStyle = "black";
		ctx.fillStyle="red";
		ctx.fill();//colore a imagem
		ctx.moveTo(100,110);
		ctx.arc(100,110, 20, 0, Math.PI);
		ctx.lineTo(100,110);
		ctx.lineWidth = 2;
		ctx.moveTo(100,100);
		ctx.lineTo(100,102);
		ctx.moveTo(90,90);
		ctx.arc(90,90,2,0,2*Math.PI); //desenha um olho
		ctx.moveTo(110,90);
		ctx.arc(110,90,2,0,2*Math.PI); //desenha o outro olho
		ctx.stroke();

	}
	else{
		document.write("O seu navegador não conseguiu encontrar o canvas, sentimos muito")//irei colocar este aviso só uma vez, pois se eu colocar em todas as vezes que é perguntado sobre o contexto, o usuario recebe a mensagem 4 vezes
}
function SadFace()
//essa função desenha o rosto verde 
//(realiza quase os mesmos procedimentos, modificando somente a cor e o formato da boca)
{
	if (canvas.getContext){
		
		var ctx = canvas.getContext('2d');
		ctx.beginPath();
		ctx.arc(100, 100, 40, 0,2*Math.PI);
		ctx.lineWidth = 10;
		ctx.stroke();
		ctx.strokeStyle = "black";
		var grd = ctx.createLinearGradient(0,0,200,0);//aqui, é usado um gradiente ao enves de uma cor solida.
		grd.addColorStop(0, "green");
		grd.addColorStop(1, "white");
		ctx.fillStyle = grd;
		ctx.fill();
		ctx.moveTo(90,110);
		ctx.lineTo(110,110);//aqui, a boca é desenhada
		ctx.lineWidth = 2;
		ctx.stroke();
		ctx.moveTo(100,100);
		ctx.lineTo(100,102);
		ctx.moveTo(90,90);
		ctx.arc(90,90,2,0,2*Math.PI);
		ctx.moveTo(110,90);
		ctx.arc(110,90,2,0,2*Math.PI);
		ctx.stroke();

	}
}

function HappyText()//desenha o texto "nice"
{
	if(canvas.getContext){
		var ctx = canvas.getContext('2d');
		var img = new Image();
		img.src = "images/imNice.png";
		ctx.drawImage(img,50,0,100,80);
	}
}
function SadText()//desenha o texto "sad"
{
	if(canvas.getContext){
		var ctx = canvas.getContext('2d');
		ctx.font = "30px Arial";
		ctx.strokeText("Sad",73,50);
		
	}
}

function Start(){ //essa função é a que faz tudo funcionar, onde são iniciados os sprites do rosto/texto feliz ou triste através do comando do mouse
	var ctx = canvas.getContext('2d');
	HappyText();//aqui é inicializado o texto assim que a página carrega
	HappyFace();//e aqui, o rosto
	addEventListener('mouseup', logMouseButton);//cria uma interação com o mouse
	function logMouseButton(e) {
		if (typeof e === 'object') {
			switch (e.button) {
				case 0:// o "case 0" do mouse significa que haverá uma interação com o botão esquerdo do mouse
					ctx.clearRect(0,0,200,200);//limpa a tela
					if(isHappy){//como mencionado anteriormente, essa variável tipo bool controla quais elementos apareçerão na tela
						isHappy = false;
						console.log("triste");
						SadFace();
						SadText();
					}
					else{
						isHappy = true;				
						HappyText();
						HappyFace();
						console.log("feliz");
					}
					break;
			}
		}
	}
}

Start();//e aqui, é inicializado o programa.

