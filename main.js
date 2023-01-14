import './src/styles/settings/colors.css';  
import './src/styles/generic/reset.css';
import './src/styles/elements/base.css';
import cardGame from'./src/components/cardGame';
import playScore from './src/components/playerScore';

const $root = document.querySelector('#root');
const $htmlcardGame = cardGame(); 
const $htmlplayScore = playScore();  

$root.insertAdjacentHTML("beforeend", $htmlcardGame);
$root.insertAdjacentHTML("beforeend", $htmlplayScore);
