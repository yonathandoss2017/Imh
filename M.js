const { exec } = require('child_process');

const iptv_url = "http://wz4.dnip.com.br/bemtv/bemtv.sdp/playlist.m3u8";
const youtube_stream_url = "rtmp://ls18.live.rmbl.ws/slot-113/5kgz-s40i-tm2u";

const command = `ffmpeg -i ${iptv_url} -c:v libx264 -f flv ${youtube_stream_url}`;

exec(command, (error, stdout, stderr) => {
    if (error) {
        console.error(`Error ejecutando el comando: ${error.message}`);
        return;
    }
    if (stderr) {
        console.error(`Error en el proceso: ${stderr}`);
        return;
    }
    console.log(`Salida: ${stdout}`);
});
