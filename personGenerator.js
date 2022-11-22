const mon = Math.floor(Math.random() * 3);

const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Мария",
            "id_2": "Анастасия",
            "id_3": "Вероника",
            "id_4": "Алиса",
            "id_5": "Дарья",
            "id_6": "Ольга",
            "id_7": "Яна",
            "id_8": "Екатерина",
            "id_9": "Надежда",
            "id_10": "Людмила"
        }
    }`,
    patronymicJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александров",
            "id_2": "Максимов",
            "id_3": "Иванов",
            "id_4": "Артемов",
            "id_5": "Дмитриев",
            "id_6": "Никитьев",
            "id_7": "Михаилов",
            "id_8": "Даниилов",
            "id_9": "Егоров",
            "id_10": "Андреев"
        }
    }`,
    professionMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Водитель",
            "id_2": "Плотник",
            "id_3": "Слесарь",
            "id_4": "Учитель",
            "id_5": "Бригадир",
            "id_6": "Таксист",
            "id_7": "Стоматолог",
            "id_8": "Менеджер",
            "id_9": "Кочегар",
            "id_10": "Юрист"
        }
    }`,
    professionFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Стилист",
            "id_2": "Парикмахер",
            "id_3": "Врач",
            "id_4": "Продавец",
            "id_5": "Директор",
            "id_6": "Пекарь",
            "id_7": "Учитель",
            "id_8": "Тренер",
            "id_9": "Портная",
            "id_10": "Контролер"
        }
    }`,
    
    GENDER_MALE: 'Мужчина, ',
    GENDER_FEMALE: 'Женщина, ',

    randomGender: function() {
        return Math.floor(Math.random()*2) == 1 ? this.GENDER_MALE : this.GENDER_FEMALE;
    },

    randomIntNumber: (min = 0, max = 1) => Math.floor(Math.random() * (max - min + 1) + min),
    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;
        return obj.list[prop];
    },

    randomFirstName: function() {
        if (this.person.gender == 'Мужчина, ') {
            return this.randomValue(this.firstNameMaleJson);
        } else {
            return this.randomValue(this.firstNameFemaleJson);
        }
    },

    randomPatronymic: function() {
        if (this.person.gender == 'Мужчина, ') {
            return this.randomValue(this.patronymicJson) + "ич";
        } else {
            return this.randomValue(this.patronymicJson) + "на";
        }
    },

    randomSurname: function() {
        if (this.person.gender == 'Мужчина, ') {
            return this.randomValue(this.surnameJson);
        } else {
            return this.randomValue(this.surnameJson) + "а";
        }
    },

    randomMonth31: function randomMonth() {
        let months = [`января`, `марта`, `мая`,	`июля`,	`августа`, `октября`, `декабря`];
        let month = months[Math.floor(Math.random() * 7)];
        return month;
    },
    
    randomMonth30: function randomMonth() {
        let months = [`апреля`, `июня`, `сентября`, `ноября`];
        let month = months[Math.floor(Math.random() * 4)];
        return month;
    },

    randomMonthFeb28: function randomMonth() {
		let month = `февраля`
		return month;
	},

    rendomYear: function() {
        return this.randomIntNumber(1950, 1990) + " г.р.";
    },

    randomРrofession: function() {
        if (this.person.gender == 'Мужчина, ') {
            return this.randomValue(this.professionMaleJson);
        } else {
            return this.randomValue(this.professionFemaleJson);
        }
    },

    getPerson: function() {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.surname = this.randomSurname();
        this.person.firstName = this.randomFirstName();
        this.person.patronymic = this.randomPatronymic();
        if (mon === 0) {
            this.person.month = this.randomMonth31();
            this.person.day = this.randomIntNumber(1, 31);
        } else if (mon === 1) {
            this.person.month = this.randomMonth30();
            this.person.day = this.randomIntNumber(1, 30);
        } else if (mon === 2) {
            this.person.month = this.randomMonthFeb28();
            this.person.day = this.randomIntNumber(1, 28);
        }    
        this.person.year = this.rendomYear(1950, 1990);
        this.person.profession = this.randomРrofession();
        return this.person;
    }
};