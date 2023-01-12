
export interface Game {
    id: Number;
    name: String;
    detail: String,
    publisher: String,
    developer: String,
    release_date: String,
    genre: String,
    rating: Number,
    global_rating: Number,

    cover_pic: String,
    profile_pic: String,
    ingame_pic: String[],
}

export interface Banner {
    id: Number,
    image: String,
    icon: String,
}

  