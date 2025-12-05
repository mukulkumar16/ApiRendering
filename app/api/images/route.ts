'use server';

export async function GET() {
    const data = {
        name: "cars",
        images: [
            { url: "https://th.bing.com/th/id/R.aac39272c80a9d5f1a32b985d7081af8?rik=QM1mI%2bwbr4IJ8Q&riu=http%3a%2f%2fimg.lum.dolimg.com%2fv1%2fimages%2fopen-uri20150422-7119-1uv7u40_107f04cd.jpeg%3fregion%3d0%2c0%2c600%2c450&ehk=NzuVh1UwIZ5AZfDvKqRKbjP5UjRaQByu8d%2f4kGE1hSU%3d&risl=&pid=ImgRaw&r=0", ready: true, error: false },
            { url: "https://th.bing.com/th/id/R.aac39272c80a9d5f1a32b985d7081af8?rik=QM1mI%2bwbr4IJ8Q&riu=http%3a%2f%2fimg.lum.dolimg.com%2fv1%2fimages%2fopen-uri20150422-7119-1uv7u40_107f04cd.jpeg%3fregion%3d0%2c0%2c600%2c450&ehk=NzuVh1UwIZ5AZfDvKqRKbjP5UjRaQByu8d%2f4kGE1hSU%3d&risl=&pid=ImgRaw&r=0", ready: false, error: true },
            { url: "https://th.bing.com/th/id/R.aac39272c80a9d5f1a32b985d7081af8?rik=QM1mI%2bwbr4IJ8Q&riu=http%3a%2f%2fimg.lum.dolimg.com%2fv1%2fimages%2fopen-uri20150422-7119-1uv7u40_107f04cd.jpeg%3fregion%3d0%2c0%2c600%2c450&ehk=NzuVh1UwIZ5AZfDvKqRKbjP5UjRaQByu8d%2f4kGE1hSU%3d&risl=&pid=ImgRaw&r=0", ready: true, error: false },
            { url: "https://th.bing.com/th/id/R.aac39272c80a9d5f1a32b985d7081af8?rik=QM1mI%2bwbr4IJ8Q&riu=http%3a%2f%2fimg.lum.dolimg.com%2fv1%2fimages%2fopen-uri20150422-7119-1uv7u40_107f04cd.jpeg%3fregion%3d0%2c0%2c600%2c450&ehk=NzuVh1UwIZ5AZfDvKqRKbjP5UjRaQByu8d%2f4kGE1hSU%3d&risl=&pid=ImgRaw&r=0", ready: true, error: false },
        ]
    };

    return Response.json(data);
}
