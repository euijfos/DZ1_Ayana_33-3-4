import Photo from "./Photo";

function Gallery () {
    return (
        <div>
            <Photo header={"Harry Potter"} link={"https://cdn.europosters.eu/image/750/wall-murals/harry-potter-hogwarts-i105088.jpg"}/>
            <Photo header={"Photo 2"} link={"https://media.diy.com/is/image/KingfisherDigital/harry-potter-hogwarts-wallpaper-mural~5011583445985_01c_MP?$MOB_PREV$&$width=618&$height=618"}/>
            <Photo header={"Photo 3"} link={"https://cdn.europosters.eu/image/750/wall-murals/harry-potter-deathly-hallows-i105099.jpg"}/>
        </div>

    )
}

export default Gallery