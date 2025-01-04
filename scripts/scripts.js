let x = document.createElement('div');
let isActive1 = true;
let isActive2 = false;
let isActive3 = false;

let parent = document.getElementById('mainBox2');
let parent1 = document.getElementsByClassName('mbt1');
let parent2 = document.getElementsByClassName('mbt2');
let parent3 = document.getElementsByClassName('mbt3');
let parentSection = document.getElementById('boxInt');

x.style.backgroundColor = 'black';
x.style.height = '4px'
x.style.width = '81px';
x.style.position = 'relative';
x.style.top = '-5px'
x.style.right = '-53px'
parent.appendChild(x);
let temp2 = document.createElement('div');
temp2.setAttribute('id', 'temp2');

temp2.style.width = '576px';
temp2.style.height = '350px';
temp2.style.position = 'relative';
temp2.style.right = '261px';
temp2.style.top = '37px';
temp2.style.backgroundColor = 'white';

let temp2H = document.createElement('p');
temp2H.style.fontFamily = 'Clan Pro Med';
temp2H.style.color = 'black !important';
temp2H.style.float = 'left';
temp2H.style.fontSize = '48px';
temp2H.style.position = 'relative';
temp2H.style.bottom = '317px';
temp2H.style.left = '45px';
temp2H.innerHTML = '<p>Discover delicious<br>eats</p>';
temp2.appendChild(temp2H);
let y = document.getElementById('mainBox2');
let temp2T = document.createElement('p');
temp2T.innerHTML = 'Order delivery from restaurants you love.';
temp2T.style.float = 'left';
temp2T.style.position = 'relative';
temp2T.style.bottom = '287px';
temp2T.style.left = '48px';
temp2T.style.fontFamily = 'Clan Pro News';
temp2T.style.fontSize = '14.5px';
temp2.appendChild(temp2T);
temp2Box = document.createElement('div');
temp2Box.setAttribute = ('id', 't2box');
temp2Box.style.height = '48px';
temp2Box.style.width = '146px';
temp2Box.style.backgroundColor = 'black';
temp2Box.style.color = 'white';
temp2Box.style.fontFamily = 'Clan Pro Med';
temp2Box.innerHTML = 'Order Now';
temp2Box.style.float = 'left';
temp2Box.style.display = 'flex';
temp2Box.style.justifyContent = 'center';
temp2Box.style.alignItems = 'center';
temp2Box.style.cursor = 'pointer';
temp2Box.style.position = 'relative';
temp2Box.style.bottom = '232px';
temp2Box.style.right = '250px';
temp2.appendChild(temp2Box);
let temp2F = document.getElementById('mainBoxBottom');

let temp3 = document.createElement('div');
temp3.style.width = '576px';
temp3.style.height = '406px';
temp3.style.backgroundColor = 'white';
let temp3H = document.createElement('div');
temp3H.style.fontFamily = 'Clan Pro Med';
temp3H.textContent = 'Request a ride now';
temp3H.style.float = 'left';
temp3H.style.fontSize = '48px';
temp3H.style.position = 'relative';
temp3H.style.bottom = '317px';
temp3H.style.left = '45px';
temp3.appendChild(temp3H);
temp3B = document.getElementById('form1');
temp3F1 = document.createElement('div');
temp3F1.style.height = '48px';
temp3F1.style.width = '146px';
temp3F1.style.backgroundColor = 'black';
temp3F1.style.color = 'white';
temp3F1.innerHTML = 'Request now';
temp3F1.style.fontSize = '15.5px';
temp3F1.style.float = 'left';
temp3F1.style.position = 'relative';
temp3F1.style.left = '44px';
temp3F1.style.bottom = '120px';
temp3F1.style.display = 'flex';
temp3F1.style.justifyContent = 'center';
temp3F1.style.alignItems = 'center';
temp3F1.style.fontFamily = 'Clan Pro Med'
temp3F1.style.cursor = 'pointer';
temp3.appendChild(temp3F1);

temp3F2 = document.createElement('div');
temp3F2.style.height = '48px';
temp3F2.style.width = '166px';
temp3F2.style.backgroundColor = 'rgb(246, 246, 246)';
temp3F2.style.color = 'black';
temp3F2.innerHTML = 'Schedule for later';
temp3F2.style.fontSize = '15.5px';
temp3F2.style.float = 'left';
temp3F2.style.position = 'relative';
temp3F2.style.left = '69px';
temp3F2.style.bottom = '120px';
temp3F2.style.display = 'flex';
temp3F2.style.justifyContent = 'center';
temp3F2.style.alignItems = 'center';
temp3F2.style.fontFamily = 'Clan Pro Med'
temp3F2.style.cursor = 'pointer';
temp3.appendChild(temp3F2);


parent2[0].setAttribute('onclick', 'click2()');

parent3[0].setAttribute('onclick', 'click3()');
function click2(){

	if (isActive2 == false)
	{
	temp3.remove();
	y.style.visibility = 'hidden';
	x.style.left = '230px';
	x.style.visibility = 'visible';
	temp2.style.position = 'relative';
	temp2.style.visibility = 'visible';
	temp2.style.left = '0px';
	temp2.style.top = '-4px';
	temp2.style.zIndex = '1';
	y.appendChild(temp2);
	temp2F.innerHTML = 'Own a restaurant? Partner with Uber Eats';
	temp2F.style.visibility = 'visible';
	temp2F.style.width = '330px';
	temp2F.style.position = 'relative';
	temp2F.style.bottom = '78px';
	temp2F.style.left = '168px';
	temp2F.style.zIndex = '5';
	temp3B.style.display = 'none';
	parentSection.style.bottom = '0px';
	}

	else {}

	isActive1 = false;
	isActive2 = true;
	isActive3 = false;
}

parent1[0].setAttribute('onclick', 'click1()');
function click1(){
	if (isActive1 == false)
	{
	y.style.visibility = 'visible';
	temp2.remove();
	temp3.remove();
	x.style.left = '53px';
	temp2F.style.width = '320px';
	temp2F.style.position = 'relative';
	temp2F.style.bottom = '0px';
	temp2F.style.left = '0px';
	temp2F.innerHTML = 'Learn more about driving and delivering';
	temp2F.style.zIndex = '5';
	temp3B.style.display = 'none';
	parentSection.style.bottom = '0px';
	}

	else {}

	isActive1 = true;
	isActive2 = false;
	isActive3 = false;
}

function click3(){

	if (isActive3 == false)
	{
	y.style.visibility = 'hidden';
	x.style.left = '425px';
	x.style.visibility = 'visible';
	temp2F.style.visibility = 'hidden';
	temp3.style.visibility = 'visible';
	temp3.style.position = 'relative';
	temp3.style.left = '0px';
	temp3.style.bottom = '4px';
	temp2.remove();
	y.appendChild(temp3);
	temp3B.style.display = 'block';
	parentSection.style.bottom = '124px';
	
	}

	else {}

	isActive1 = false;
	isActive2 = false;
	isActive3 = true;
}