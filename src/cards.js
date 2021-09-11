import imgs1 from '../media/images/melnica.jpg';
import imgs2 from '../media/images/gory.jpg';
import imgs3 from '../media/images/domik.png';

import aud1 from '../media/audio/pticy.mp3';
import aud2 from '../media/audio/ruceek.mp3';
import aud3 from '../media/audio/priroda.mp3';

import vid1 from '../media/videos/p1.mp4';
import vid2 from '../media/videos/p2.mp4';
import vid3 from '../media/videos/p3.mp4';

const cards = [
    {title: 'Мельница у реки', img: imgs1, audio: aud1, video: vid1},
    {title: 'Горы осенью', img: imgs2, audio: aud2, video: vid2},
    {title: 'Деревня летом', img: imgs3, audio: aud3, video: vid3},
];
  
const infoCard = (card) => {
    return `<div class="card-item">
                <img class="gallery-img" src="${card.img}">
                <p class="card-text">${card.title}</p>
                <audio class="card-aud" src="${card.audio}" controls></audio>
                <video src="${card.video}" width="360" height="420" controls></video>
            </div>`
};

const runCard = list => {
    document.querySelector('.gallery-cards').innerHTML = list.map(item => infoCard(item)).join('');
}

runCard(cards);