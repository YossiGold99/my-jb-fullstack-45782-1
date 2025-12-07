import AnimalCard, { type Animal } from './AnimalCard'

export default function ZooGallery({ animals }: { animals: Animal[] }) {
    return (
        <section className="zoo-gallery">
            {animals.map((a) => (
                <AnimalCard key={a.id} animal={a} />
            ))}
        </section>
    )
}
