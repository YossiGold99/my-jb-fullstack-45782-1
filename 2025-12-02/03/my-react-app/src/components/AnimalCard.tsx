export type Animal = {
    id: string
    name: string
    species: string
    img: string
    description?: string
}

export default function AnimalCard({ animal }: { animal: Animal }) {
    return (
        <article className="animal-card">
            <div className="animal-image-wrap">
                <img src={animal.img} alt={`${animal.name} the ${animal.species}`} />
            </div>
            <div className="animal-body">
                <h3 className="animal-name">{animal.name}</h3>
                <p className="animal-species">{animal.species}</p>
                {animal.description && <p className="animal-desc">{animal.description}</p>}
            </div>
        </article>
    )
}
