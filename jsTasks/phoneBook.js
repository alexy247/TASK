// Телефонная книга
var phoneBook = []; 
var prettyBook = []; 

function m (command) {

var words = command.split(' '); 
if (words[0]=='ADD'){
  
	var phones = words[2].split(','); 
  if (phoneBook.length==0)
  phoneBook.push({ name: words[1], phone: phones});
	for (var i = 0; i < phoneBook.length; i++) 
	{
		if (words[1] == phoneBook[i].name) 
		{ 
			l:for (var k = 0; k < phones.length; k++) 
			{//массив телефонов которые вводят 
				for (var j = 0; j < phoneBook[i].phone.length; j++) // массив телефонов у имени, которое нашли 
					if (phones[k] == phoneBook[i].phone[j]) 
					continue l; 
			phoneBook[i].phone.push(phones[k]);
			}
		} 
		else if ((words[1] != phoneBook[i].name)&&(i == phoneBook.length-1)) 
			{
				phoneBook.push({ 
				name: words[1], 
				phone: phones}); 
			} 
     
    } }
if (words[0]=='REMOVE_PHONE'){
	for (var i = 0; i < phoneBook.length; i++) 
		for (var j = 0; j < phoneBook[i].phone.length; j++) 
			if (words[1]==phoneBook[i].phone[j]) 
			{ 
				phoneBook[i].phone.splice(j,1); 
				return true;
			} 
		return false; 
}
if (words[0]=='SHOW'){

	if (phoneBook.length==1){
    prettyBook[0]=phoneBook[0].name + ': ' + phoneBook[0].phone.join(', ');
    return prettyBook;}
	function show(){
	phoneBook.sort(function (a, b) 
	{
		  if (a.name > b.name) {
			return 1;
		  }
		  if (a.name < b.name) {
			return -1;
		  }
		  return 0;
	});
    for (var i = 0; i < phoneBook.length; i++) 
    prettyBook[i]=phoneBook[i].name + ': ' + phoneBook[i].phone.join(', ');
    console.log(prettyBook);
    return prettyBook.join(', ');
	}
    show();  
    
}
};
m('ADD Ivan 555-10-01,555-10-03');
m('ADD Ivan 555-10-02');
m('REMOVE_PHONE 555-10-03');

m('ADD Alex 555-20-01');
m('SHOW');
