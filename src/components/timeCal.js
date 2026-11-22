export default function timeCal(total){

    let min, sec;

    min = total/60;
    sec = total%60;

    let time =  String(Math.floor(min)).padStart(2,'0') +":"+ String(sec).padStart(2,'0');

    return time;
}