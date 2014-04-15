function Person(name,email){
	this.name = name;
	this.email = email;
	this.welcome = function(){
		console.log("Hi my name is "+name+". My email is "+email);
	};
}