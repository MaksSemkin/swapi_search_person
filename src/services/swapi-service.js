export default class SwapiService {


    async getPersons() {
        const res = await fetch(`https://swapi.dev/api/people/`);

        if (!res.ok) {
            throw new Error('Could not fetch ' +
                `, received ${res.status}`)
        }
        return await res.json();
    }

}
