import { v4 as uuidv4 } from "uuid";

function createBookWithID(book) {
    return {
        ...book,
        isFavor: false,
        id: uuidv4(),
    };
}

export default createBookWithID;
