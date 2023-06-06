
export class TripModel {
    id: string
    tripName: string
    tripKind: string
    difficulty: DifficultyTrip
    kind: KindTrip
    place: Place
    like:number
}


export class Place {
    name: string
    points: Points
}
export class Points {
    x: number
    y: number
}

export enum DifficultyTrip {
    hard = 1,
    medium = 2,
    easy = 3,
}
export enum KindTrip {
    garden,// גינה
    observatory,//מיצפה
    suitableFamilies,//מתאים למשפחות 
    hikingTrail,//מסלול הליכה 
    dry,
    wet
}
