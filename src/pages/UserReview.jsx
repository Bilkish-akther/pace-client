
const UserReview = () => {
    const reviews = [
        {
            id: 1,
            user: 'Alice',
            comment: 'Great product! Really loved it.',
        },
        {
            id: 2,
            user: 'Bob',
            comment: 'Excellent service. Will order again.',
        },
        {
            id: 3,
            user: 'Charlie',
            comment: 'Fast delivery and good quality.',
        },
    ];

    return (
        <div className="bg-green-100 container mx-auto mt-10 p-4">
            <h2 className="text-xl font-bold mb-4">User Reviews</h2>
            {reviews.map(review => (
                <div key={review.id} className="bg-white rounded-lg shadow p-4 mb-4">
                    <p className="font-semibold">{review.user}</p>
                    <p>{review.comment}</p>
                </div>
            ))}
        </div>
    );
};

export default UserReview;
