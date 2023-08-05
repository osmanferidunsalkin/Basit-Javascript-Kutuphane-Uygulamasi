const tablo=document.querySelector(".tablo"),
kitapAdı=document.querySelector(".kitapAdı"),
yazar=document.querySelector(".yazar"),
numara=document.querySelector(".numara"),
sayfa=document.querySelector(".sayfa"),
ağırlık=document.querySelector(".ağırlık"),
yıl=document.querySelector(".yıl"),
Güncelle=document.querySelector(".Güncelle"),
Ekle=document.querySelector(".Ekle");
var rIndex;
Ekle.addEventListener("click",()=>{
    let Adtd=document.createElement("td");
    let Yztd=document.createElement("td");
    let Ntd=document.createElement("td");
    let Std=document.createElement("td");
    let Atd=document.createElement("td");
    let Ytd=document.createElement("td");
Adtd.textContent=kitapAdı.value;
Yztd.textContent=yazar.value;
Ntd.textContent=numara.value;
Std.textContent=sayfa.value;
Atd.textContent=ağırlık.value;
Ytd.textContent=yıl.value;
let tSil = document.createElement("td");
let silBtn =document.createElement("button");
silBtn.textContent="Sil";
tSil.appendChild(silBtn); 
silBtn.onclick=function(e){
    tablo.removeChild(this.parentNode.parentNode);
}
let tr=document.createElement("tr");
let Düzenle = document.createElement("td");
let dznBtn =document.createElement("button");
dznBtn.textContent="Düzenle";
Düzenle.appendChild(dznBtn);
dznBtn.onclick=function(e){
    SatırSeçme();
 }
tr.appendChild(Adtd);
tr.appendChild(Yztd);
tr.appendChild(Ntd);
tr.appendChild(Std);
tr.appendChild(Atd);
tr.appendChild(Ytd);
tr.appendChild(tSil);
tr.appendChild(Düzenle);
tablo.appendChild(tr);
})
function SatırSeçme()
{  
    for(var i = 1; i < tablo.rows.length; i++)
    {
        tablo.rows[i].onclick = function()
        {
          rIndex = this.rowIndex;
          kitapAdı.value = this.cells[0].innerHTML;
          yazar.value = this.cells[1].innerHTML;
          numara.value = this.cells[2].innerHTML;
          sayfa.value = this.cells[3].innerHTML
          ağırlık.value = this.cells[4].innerHTML
          yıl.value = this.cells[5].innerHTML
        };
    }
}
SatırSeçme();
function Güncelleme()
{
    tablo.rows[rIndex].cells[0].innerHTML =  kitapAdı.value;
    tablo.rows[rIndex].cells[1].innerHTML = yazar.value;
    tablo.rows[rIndex].cells[2].innerHTML =  numara.value;
    tablo.rows[rIndex].cells[3].innerHTML =  sayfa.value;
    tablo.rows[rIndex].cells[4].innerHTML = ağırlık.value;
    tablo.rows[rIndex].cells[5].innerHTML = yıl.value;
}
Güncelle.addEventListener("click",Güncelleme)