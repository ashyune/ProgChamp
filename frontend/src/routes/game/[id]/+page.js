import {games} from '$lib/data/games.js';

export function load({params}) {
    const game = games.find(g => g.id === params.id);

    if(!game){
        return {
            status: 404,
            error: new Error ('Game not found D:')
        };
    }
    return {game};
}