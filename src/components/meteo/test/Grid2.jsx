
export default function Grid2({ data }) {

    return (
        <div className="border border-border p-8 aspect-square flex flex-col justify-center items-center gap-2">
            Humidité:
            <p>{data.main.humidity}%</p>
        </div>
    );
}
