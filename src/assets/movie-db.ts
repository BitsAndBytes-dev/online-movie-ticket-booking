export const db = {
	"languages": [
		{ name: "Hindi", checked: true },
		{ name: "English", checked: true },
		{ name: "Telugu", checked: true },
		{ name: "Punjabi", checked: true }
	],
	"genres": [
		{ name: "Action", checked: true },
		{ name: "Fantasy", checked: true },
		{ name: "Romance", checked: true },
		{ name: "Horror", checked: true }
	],
	"movies": [
		{
			"id": 1,
			"title": "Kisi Ka Bhai Kisi Ki Jaan",
			"image": "https://upload.wikimedia.org/wikipedia/en/8/86/Kisi_Ka_Bhai_Kisi_Ki_Jaan_poster.jpg",
			"ratings": 7.1,
			"genre": "Action",
			"length": 119,
			"releasedDate": "21/04/2023",
			"language": "Hindi",
			"showTime": "21:00",
			"price": 300,
			"available": true
		},
		{
			"id": 2,
			"title": "Beast",
			"image": "https://upload.wikimedia.org/wikipedia/en/9/99/Beast_soundtrack.jpg",
			"ratings": 5.9,
			"genre": "Action",
			"length": 124,
			"releasedDate": "13/04/2022",
			"language": "Hindi, Tamil, Telugu",
			"showTime": "15:00",
			"price": 370,
			"available": true
		}
	]
}