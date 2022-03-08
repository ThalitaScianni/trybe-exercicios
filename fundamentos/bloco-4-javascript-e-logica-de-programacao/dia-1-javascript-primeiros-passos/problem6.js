let chessPiece = "Bispo";

if(chessPiece.toLowerCase() === "rei") {
    console.log("Move-se uma casa em qualquer direção.");

} else if(chessPiece.toLowerCase() === "rainha" ) {
    console.log ("Move-se na vertical, horizontal e diagonal.");

} else if (chessPiece.toLowerCase() === "torre" ) {
    console.log("Move-se na vertical e horizontal");

} else if (chessPiece.toLowerCase() === "bispo") {
    console.log("Move-se na diagonal.");

} else if(chessPiece.toLowerCase() === "cavalo"){
    console.log("Move-se em L.");

} else if (chessPiece.toLowerCase() === "peão") {
    console.log("Move-se para frente, uma casa por vez.");

} else {
    console.log("Peça inválida");
}