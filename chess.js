var g = 2;
let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');

let noneWhitePawn = document.getElementById('none1');
let noneWhiteRook = document.getElementById('none2');
let noneWhiteKnight = document.getElementById('none3');
let noneWhiteBishop = document.getElementById('none4');
let noneWhiteQueen = document.getElementById('none5');
let noneWhiteKing = document.getElementById('none6');
let noneBlackPawn = document.getElementById('none7');
let noneBlackRook = document.getElementById('none8');
let noneBlackKnight = document.getElementById('none9');
let noneBlackBishop = document.getElementById('none10');
let noneBlackQueen = document.getElementById('none11');
let noneBlackKing = document.getElementById('none12');

let p_white = '&#9817';
let p_black = '&#9823';
let r_white = '&#9814';
let r_black = '&#9820';
let n_white = '&#9816';
let n_black = '&#9822';
let b_white = '&#9815';
let b_black = '&#9821';
let q_white = '&#9813';
let q_black = '&#9819';
let k_white = '&#9812';
let k_black = '&#9818';

noneWhitePawn.innerHTML = p_white;
noneWhiteRook.innerHTML = r_white;
noneWhiteKnight.innerHTML = n_white;
noneWhiteBishop.innerHTML = b_white;
noneWhiteQueen.innerHTML = q_white;
noneWhiteKing.innerHTML = k_white;
noneBlackPawn.innerHTML = p_black;
noneBlackRook.innerHTML = r_black;
noneBlackKnight.innerHTML = n_black;
noneBlackBishop.innerHTML = b_black;
noneBlackQueen.innerHTML = q_black;
noneBlackKing.innerHTML = k_black;

function whiteFigure(x){
    if(x == noneWhitePawn.innerHTML || x == noneWhiteRook.innerHTML || x == noneWhiteKnight.innerHTML || x == noneWhiteBishop.innerHTML || x == noneWhiteQueen.innerHTML || x == noneWhiteKing.innerHTML){
        alert('impossible move');
    }else return true;
}

function blackFigure(x){
    if(x == noneBlackPawn.innerHTML || x == noneBlackRook.innerHTML || x == noneBlackKnight.innerHTML || x == noneBlackBishop.innerHTML || x == noneBlackQueen.innerHTML || x == noneBlackKing.innerHTML){
        alert('impossible move');
    }else return true;
}

let arrCoord = [
    ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'],
    ['8', '7', '6', '5', '4', '3', '2', '1']
]

document.onkeypress = move;

function openBorder(){
    let border = document.querySelector('.border');
    let kubik;
    let flag = true;
    for(let i=0; i<8; i++){
        for(let j=0; j<8; j++){
            if(j==0) flag = !flag;
            kubik = document.createElement('div');
            if (flag) kubik.className = 'kubik black';
            else kubik.className = 'kubik white';
            let w = arrCoord[0][j] + arrCoord[1][i];
            kubik.id = w;  
            border.appendChild(kubik);
            flag = !flag;

        }
    }

    border.children[0].innerHTML=r_black;
    border.children[1].innerHTML=n_black;
    border.children[2].innerHTML=b_black;
    border.children[3].innerHTML=q_black;
    border.children[4].innerHTML=k_black;
    border.children[5].innerHTML=b_black;
    border.children[6].innerHTML=n_black;
    border.children[7].innerHTML=r_black;

    border.children[8].innerHTML=p_black;
    border.children[9].innerHTML=p_black;
    border.children[10].innerHTML=p_black;
    border.children[11].innerHTML=p_black;
    border.children[12].innerHTML=p_black;
    border.children[13].innerHTML=p_black;
    border.children[14].innerHTML=p_black;
    border.children[15].innerHTML=p_black;

    border.children[48].innerHTML=p_white;
    border.children[49].innerHTML=p_white;
    border.children[50].innerHTML=p_white;
    border.children[51].innerHTML=p_white;
    border.children[52].innerHTML=p_white;
    border.children[53].innerHTML=p_white;
    border.children[54].innerHTML=p_white;
    border.children[55].innerHTML=p_white;

    border.children[56].innerHTML=r_white;
    border.children[57].innerHTML=n_white;
    border.children[58].innerHTML=b_white;
    border.children[59].innerHTML=q_white;
    border.children[60].innerHTML=k_white;
    border.children[61].innerHTML=b_white;
    border.children[62].innerHTML=n_white;
    border.children[63].innerHTML=r_white;
}

openBorder();

function moveFigure(){
    let insert1 = document.getElementById(input1.value).innerHTML;
        if(g % 2 == 0){
            if(blackFigure(insert1) == true){
                document.getElementById(input2.value).innerHTML = document.getElementById(input1.value).innerHTML;
                document.getElementById(input1.value).innerHTML = '';
                input1.value = '';
                input2.value = '';
                g++;
            }
        }else if(g % 2 == 1){
            if(whiteFigure(insert1) == true){
                document.getElementById(input2.value).innerHTML = document.getElementById(input1.value).innerHTML;
                document.getElementById(input1.value).innerHTML = '';
                input1.value = '';
                input2.value = '';
                g++;
            }
        }
}

function move(e){
    if(e.keyCode == 13){
        return fig();
    }
}

function fig(){
    if(document.getElementById(input1.value).innerHTML == ''){
        alert('in this board not figure');
    }
    else return figure();
}
function figure(){
    let insert1 = document.getElementById(input1.value).innerHTML;
    if(insert1 == noneWhitePawn.innerHTML){
        return whitePawn();
    }
    else if(insert1 == noneWhiteRook.innerHTML){
        return whiteRook();
    }
    else if(insert1 == noneWhiteKnight.innerHTML){
        return whiteKnight();
    }
    else if(insert1 == noneWhiteBishop.innerHTML){
        return whiteBishop();
    }
    else if(insert1 == noneWhiteQueen.innerHTML){
        return whiteQueen();
    }
    else if(insert1 == noneWhiteKing.innerHTML){
        return whiteKing();
    }
    else if(insert1 == noneBlackPawn.innerHTML){
        return blackPawn();
    }
    else if(insert1 == noneBlackRook.innerHTML){
        return blackRook();
    }
    else if(insert1 == noneBlackKnight.innerHTML){
        return blackKnight();
    }
    else if(insert1 == noneBlackBishop.innerHTML){
        return blackBishop();
    }
    else if(insert1 == noneBlackQueen.innerHTML){
        return blackQueen();
    }
    else if(insert1 == noneBlackKing.innerHTML){
        return blackKing();
    }
}

function whitePawn(){
    let insert2 = document.getElementById(input2.value).innerHTML;

    if(whiteFigure(insert2) == true){
        for(let i = 0; i < 8; i++){
            if(input2.value[0] == arrCoord[0][i]){
                if(input1.value[0] == arrCoord[0][i - 1] || input1.value[0] == arrCoord[0][i + 1]){
                    if(insert2 != ''){
                        if(input2.value[1] == 8){
                            document.getElementById(input2.value).innerHTML = q_white;
                            document.getElementById(input1.value).innerHTML = '';
                            input1.value = '';
                            input2.value = '';
                        }
                        return moveFigure();
                    }
                    else alert('impossible move');
                }
                else if(input1.value[0] == input2.value[0] && (input2.value[1]*1 == (input1.value[1]*1 + 1)) && insert2 == ''){
                    return moveFigure();
                }
                else if(input1.value[1]*1 == 2 && input2.value[1]*1 == 4 && input1.value[0] == input2.value[0] && document.getElementById(input1.value[0] + 3).innerHTML == ''){
                    return moveFigure();
                }
                else alert('impossible move');
            }
        }
    }
}

function whiteRook(){
    let insert2 = document.getElementById(input2.value).innerHTML;
    let x1 = input1.value[0];
    let y1 = input1.value[1]*1;
    let x2 = input2.value[0];
    let y2 = input2.value[1]*1;
    if(whiteFigure(insert2) == true){
        if(x1 == x2){
            if(Math.abs(y2 - y1) == 1){
                return moveFigure();
            }else {
                for(let i = 1; i < Math.abs(y2 - y1); i++){
                    let delta = y2 - y1;
                    let deltaAbs = Math.abs(delta);
                    let nshan = delta / deltaAbs;
                    if(document.getElementById(x1 + (y1 + nshan * i)).innerHTML == ''){
                        if(i == (deltaAbs - 1)){
                            return moveFigure();
                        }continue;
                    }return alert('impossible move');
                }
            }
        }else if(y1 == y2){
            for(let i = 0; i < 8; i++){
                if(x1 == arrCoord[0][i]){
                    for(let j = 0; j < 8; j++){
                        if(x2 == arrCoord[0][j]){
                            if(Math.abs(i - j) == 1){
                                return moveFigure();
                            }else {
                                for(let k = 1; k < Math.abs(i - j); k++){
                                    let delta = j - i;
                                    let deltaAbs = Math.abs(delta);
                                    let nshan = delta / deltaAbs;
                                    let ident = nshan * k + i;
                                    let ident1 = arrCoord[0][ident];
                                    let ide = ident1 + y1;
                                    if(document.getElementById(ide).innerHTML == ''){
                                        if(k == (deltaAbs - 1)){
                                            return moveFigure();
                                        }continue;
                                    }return alert('impossible move');
                                }
                            }
                        }
                    }
                }
            }
        }else alert('impossible move');
    }
}

function whiteKnight(){
    let insert2 = document.getElementById(input2.value).innerHTML;
    let x1 = input1.value[0];
    let y1 = input1.value[1]*1;
    let x2 = input2.value[0];
    let y2 = input2.value[1]*1;
    if(whiteFigure(insert2) == true){
        for(let i = 0; i < 8; i++){
            if(x1 == arrCoord[0][i]){
                for(let j = 0; j < 8; j++){
                    if(x2 == arrCoord[0][j]){
                        let delta1 = Math.abs(i-j);
                        let delta2 = Math.abs(y1 - y2);
                        if(delta1 < 2 || delta2 <2){
                            if(delta1 / delta2 == 2 || delta2 / delta1 == 2){
                                return moveFigure();
                            }else alert('impossible move');
                        }else alert('impossible move');
                    }
                }
            }
        }
    }
}

function whiteBishop(){
    let insert2 = document.getElementById(input2.value).innerHTML;
    let x1 = input1.value[0];
    let y1 = input1.value[1]*1;
    let x2 = input2.value[0];
    let y2 = input2.value[1]*1;
    if(whiteFigure(insert2) == true){
        for(let i = 0; i < 8; i++){
            if(x1 == arrCoord[0][i]){
                for(let j = 0; j < 8; j++){
                    if(x2 == arrCoord[0][j]){
                        let delta1 = j - i;
                        let delta2 = y2 - y1;
                        let nshan1 = delta1 / Math.abs(delta1);
                        let nshan2 = (delta2) / Math.abs(delta2);
                        if(Math.abs(delta1) == 1 && Math.abs(delta2) == 1){
                            return moveFigure();
                        }
                        else if(Math.abs(delta1) / Math.abs(delta2) == 1){
                            for(let k = 1; k < Math.abs(delta2); k++){
                                let ident = arrCoord[0][k * nshan1 + i] + (y1 * 1 + k * nshan2);
                                if(document.getElementById(ident).innerHTML == ''){
                                    if(k == Math.abs(delta1) - 1){
                                        return moveFigure();
                                    }continue;
                                }else alert('impossible move');
                            }
                        }else alert('impossible move');
                    }
                }
            }
        }
    }
}

function whiteQueen(){
    let insert2 = document.getElementById(input2.value).innerHTML;
    let x1 = input1.value[0];
    let y1 = input1.value[1]*1;
    let x2 = input2.value[0];
    let y2 = input2.value[1]*1;
    if(whiteFigure(insert2) == true){
        for(let i = 0; i < 8; i++){
            if(x1 == arrCoord[0][i]){
                for(let j = 0; j < 8; j++){
                    if(x2 == arrCoord[0][j]){
                        let delta1 = j - i;
                        let delta2 = y2 - y1;
                        let nshan1 = delta1 / Math.abs(delta1);
                        let nshan2 = (delta2) / Math.abs(delta2);
                        if(Math.abs(delta1) == 1 && Math.abs(delta2) == 1){
                            return moveFigure();
                        }
                        else if(Math.abs(delta1) / Math.abs(delta2) == 1){
                            for(let k = 1; k < Math.abs(delta2); k++){
                                let ident = arrCoord[0][k * nshan1 + i] + (y1 * 1 + k * nshan2);
                                if(document.getElementById(ident).innerHTML == ''){
                                    if(k == Math.abs(delta1) - 1){
                                        return moveFigure();
                                    }continue;
                                }else alert('impossible move');
                            }
                        }else return whiteRook();
                    }
                }
            }
        }
    }
}

function whiteKing(){
    let insert2 = document.getElementById(input2.value).innerHTML;
    let x1 = input1.value[0];
    let y1 = input1.value[1]*1;
    let x2 = input2.value[0];
    let y2 = input2.value[1]*1;
    if(whiteFigure(insert2) == true){
        for(let i = 0; i < 8; i++){
            if(x1 == arrCoord[0][i]){
                for(let j = 0; j < 8; j++){
                    if(x2 == arrCoord[0][j]){
                        let delta1 = j - i;
                        let delta2 = y2 - y1;
                        if(Math.abs(delta1) == 1 || Math.abs(delta1) == 0){
                            if(Math.abs(delta2) == 1 || Math.abs(delta2) == 0){
                                return moveFigure();
                            }else alert('impossible move');
                        }
                    }
                }
            }
        }
    }
}

function blackPawn(){
    let insert2 = document.getElementById(input2.value).innerHTML;

    if(blackFigure(insert2) == true){
        for(let i = 0; i < 8; i++){
            if(input2.value[0] == arrCoord[0][i]){
                if(input1.value[0] == arrCoord[0][i - 1] || input1.value[0] == arrCoord[0][i + 1]){
                    if(insert2 != ''){
                        if(input2.value[1] == 1){
                            document.getElementById(input2.value).innerHTML = q_black;
                            document.getElementById(input1.value).innerHTML = '';
                            input1.value = '';
                            input2.value = '';
                        }
                        return moveFigure();
                    }
                    else alert('impossible move');
                }
                else if(input1.value[0] == input2.value[0] && (input2.value[1]*1 == (input1.value[1]*1 - 1)) && insert2 == ''){
                    return moveFigure();
                }
                else if(input1.value[1]*1 == 7 && input2.value[1]*1 == 5 && input1.value[0] == input2.value[0] && document.getElementById(input1.value[0] + 3).innerHTML == ''){
                    return moveFigure();
                }
                else alert('impossible move');
            }
        }
    }
}

function blackRook(){
    let insert2 = document.getElementById(input2.value).innerHTML;
    let x1 = input1.value[0];
    let y1 = input1.value[1]*1;
    let x2 = input2.value[0];
    let y2 = input2.value[1]*1;
    if(blackFigure(insert2) == true){
        if(x1 == x2){
            if(Math.abs(y2 - y1) == 1){
                return moveFigure();
            }else {
                for(let i = 1; i < Math.abs(y2 - y1); i++){
                    let delta = y2 - y1;
                    let deltaAbs = Math.abs(delta);
                    let nshan = delta / deltaAbs;
                    if(document.getElementById(x1 + (y1 + nshan * i)).innerHTML == ''){
                        if(i == (deltaAbs - 1)){
                            return moveFigure();
                        }continue;
                    }return alert('impossible move');
                }
            }
        }else if(y1 == y2){
            for(let i = 0; i < 8; i++){
                if(x1 == arrCoord[0][i]){
                    for(let j = 0; j < 8; j++){
                        if(x2 == arrCoord[0][j]){
                            if(Math.abs(i - j) == 1){
                                return moveFigure();
                            }else {
                                for(let k = 1; k < Math.abs(i - j); k++){
                                    let delta = j - i;
                                    let deltaAbs = Math.abs(delta);
                                    let nshan = delta / deltaAbs;
                                    let ident = nshan * k + i;
                                    let ident1 = arrCoord[0][ident];
                                    let ide = ident1 + y1;
                                    if(document.getElementById(ide).innerHTML == ''){
                                        if(k == (deltaAbs - 1)){
                                            return moveFigure();
                                        }continue;
                                    }return alert('impossible move');
                                }
                            }
                        }
                    }
                }
            }
        }else alert('impossible move');
    }
}

function blackKnight(){
    let insert2 = document.getElementById(input2.value).innerHTML;
    let x1 = input1.value[0];
    let y1 = input1.value[1]*1;
    let x2 = input2.value[0];
    let y2 = input2.value[1]*1;
    if(blackFigure(insert2) == true){
        for(let i = 0; i < 8; i++){
            if(x1 == arrCoord[0][i]){
                for(let j = 0; j < 8; j++){
                    if(x2 == arrCoord[0][j]){
                        let delta1 = Math.abs(i-j);
                        let delta2 = Math.abs(y1 - y2);
                        if(delta1 < 2 || delta2 <2){
                            if(delta1 / delta2 == 2 || delta2 / delta1 == 2){
                                return moveFigure();
                            }else alert('impossible move');
                        }else alert('impossible move');
                    }
                }
            }
        }
    }
}

function blackBishop(){
    let insert2 = document.getElementById(input2.value).innerHTML;
    let x1 = input1.value[0];
    let y1 = input1.value[1]*1;
    let x2 = input2.value[0];
    let y2 = input2.value[1]*1;
    if(blackFigure(insert2) == true){
        for(let i = 0; i < 8; i++){
            if(x1 == arrCoord[0][i]){
                for(let j = 0; j < 8; j++){
                    if(x2 == arrCoord[0][j]){
                        let delta1 = j - i;
                        let delta2 = y2 - y1;
                        let nshan1 = delta1 / Math.abs(delta1);
                        let nshan2 = (delta2) / Math.abs(delta2);
                        if(Math.abs(delta1) == 1 && Math.abs(delta2) == 1){
                            return moveFigure();
                        }
                        else if(Math.abs(delta1) / Math.abs(delta2) == 1){
                            for(let k = 1; k < Math.abs(delta2); k++){
                                let ident = arrCoord[0][k * nshan1 + i] + (y1 * 1 + k * nshan2);
                                if(document.getElementById(ident).innerHTML == ''){
                                    if(k == Math.abs(delta1) - 1){
                                        return moveFigure();
                                    }continue;
                                }else alert('impossible move');
                            }
                        }else alert('impossible move');
                    }
                }
            }
        }
    }
}

function blackQueen(){
    let insert2 = document.getElementById(input2.value).innerHTML;
    let x1 = input1.value[0];
    let y1 = input1.value[1]*1;
    let x2 = input2.value[0];
    let y2 = input2.value[1]*1;
    if(blackFigure(insert2) == true){
        for(let i = 0; i < 8; i++){
            if(x1 == arrCoord[0][i]){
                for(let j = 0; j < 8; j++){
                    if(x2 == arrCoord[0][j]){
                        let delta1 = j - i;
                        let delta2 = y2 - y1;
                        let nshan1 = delta1 / Math.abs(delta1);
                        let nshan2 = (delta2) / Math.abs(delta2);
                        if(Math.abs(delta1) == 1 && Math.abs(delta2) == 1){
                            return moveFigure();
                        }
                        else if(Math.abs(delta1) / Math.abs(delta2) == 1){
                            for(let k = 1; k < Math.abs(delta2); k++){
                                let ident = arrCoord[0][k * nshan1 + i] + (y1 * 1 + k * nshan2);
                                if(document.getElementById(ident).innerHTML == ''){
                                    if(k == Math.abs(delta1) - 1){
                                        return moveFigure();
                                    }continue;
                                }else alert('impossible move');
                            }
                        }else return whiteRook();
                    }
                }
            }
        }
    }
}

function blackKing(){
    let insert2 = document.getElementById(input2.value).innerHTML;
    let x1 = input1.value[0];
    let y1 = input1.value[1]*1;
    let x2 = input2.value[0];
    let y2 = input2.value[1]*1;
    if(blackFigure(insert2) == true){
        for(let i = 0; i < 8; i++){
            if(x1 == arrCoord[0][i]){
                for(let j = 0; j < 8; j++){
                    if(x2 == arrCoord[0][j]){
                        let delta1 = j - i;
                        let delta2 = y2 - y1;
                        if(Math.abs(delta1) == 1 || Math.abs(delta1) == 0){
                            if(Math.abs(delta2) == 1 || Math.abs(delta2) == 0){
                                return moveFigure();
                            }else alert('impossible move');
                        }
                    }
                }
            }
        }
    }
}
