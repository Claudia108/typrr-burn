var levelText = {
	1: [ null,
			"ene ite nee inet one ene ite etee tent aten ite inent",
			"eat anne tea oat tea oat neat tea oat inan ina anot",
			"too toon too enot not enot not anot enot one ato not",
			"reat ran arrai errit aar tarie erren air enroe ear"],
	2: [ null,
			"A journey of a thousand miles begins with a single step",
			"Τhοse whο fοrget histοry are cοndemned tο repeat it",
			"Τhe prοοf οf the pudding is always in the eating",
			"Dο nοt cοunt yοur chickens befοre they are hatched",
			"Fοr want οf a nail the kingdοm was lοst"],
	3: [ null,
			"Pack my box with five dozen liquor jugs",
			"The quick brown fox jumps over the lazy dog.",
			"A house which is divided against itself cannot stand",
			"Now is the time for all good men to come to the aid of their country.",
			"Ρeοple whο live in glass hοuses shοuld nοt thrοw stοnes",
			"As you can see in the title this is 'A very hard typing test text.'",
			"Someone must have the worldwide record as at least 60 seconds to he put up on my typing test wall!"],
	4: [ null,
			"I will be checking this page every day to see if someone got this score. Most likely I will! Me!",
			"Do your best! I will do my best. Believe in yourself. ",
			",.?? \| ? [{[]}]+=+=+=+=```~~~~~",
			"That's awesome! Congratulations -- did you think it'd be so easy? Yes? No? Maybe?"],
	5: [ null,
			"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
			"Mea at copiosae tincidunt quaerendum, velit signiferumque pro in.",
			"Ea vix nibh iudicabit, ut mel deleniti vulputate reformidans.",
			"Putent habemus ei sit. Te nisl legimus quo, dolorum vivendo interesset nam an",
			"Sed an detraxit accusata cotidieque, eum salutandi appellantur cu. Alii falli debitis sit no, vel id volutpat inciderint.",
			"Ceteros lobortis vix ea, an summo apeirian prodesset eos, mel vitae mentitum reprimique ex."],
	6: [ null,
			"Nam ad graecis legendos, pri no fuisset maiestatis.",
			"Liber quando eu cum, vel sonet nonumy nostrum at. Vero mundi eu cum.",
			"Et nec vituperata assueverit, sit at officiis honestatis.",
			"Vix nisl iudico labore et. Eum graeci audire maluisset ut.",
			"Ex quem aperiri mediocritatem quo. Prompta ceteros no vix.",
			"Mea ipsum causae antiopam ne, et expetenda incorrupte eam"],
}

class Level {
	constructor(number, accumulatedScore) {
		this.number = number;
		this.challenge = levelText[number];
		this.score = accumulatedScore || 0;
		this.counter = 0;
		this.indexCounter = 0;
	}

	render(index) {
		var chars = this.challenge[index].split('');
		var wrapped = chars.map(function(char, index) {
			return "<span class='letter' id='" + index + "'>" + char + "</span>";
		});
		$("#challenge-text").html(wrapped.join(""));
		return this;
	}
}

module.exports = Level;