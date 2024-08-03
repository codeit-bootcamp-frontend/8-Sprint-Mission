interface Comment {
    writer: {
        image: string;
        nickname: string;
        id: number;
    }
    updatedAt: string;
    createdAt: string;
    content: string;
    id: number;
}

export default Comment;