import { useState } from 'react'
import { initialTravelPlan } from './places.js'

export default function NestedCity() {
    const [plan, setPlan] = useState(initialTravelPlan);

    function handleComplete(parentId, childId) {
        const parent = plan[parentId];
        const newChildIds = parent.childIds.filter(id => id !== childId);
        const newParent = { ...parent, childIds: newChildIds };
        const newPlan = { ...plan, [parentId]: newParent };
        setPlan(newPlan);
    }

    const root = plan[0];
    const planetIds = root.childIds;
    return (
        <div>
            <ol>
                {planetIds.map(id => (
                    <PlaceTree
                        key={id}
                        id={id}
                        parentId={0}
                        placesById={plan}
                        onComplete={handleComplete}
                    />
                ))}
            </ol>
        </div>
    );
}

function PlaceTree({ id, parentId, placesById, onComplete }) {
    const place = placesById[id];
    const { title, childIds } = place;
    return (
        <li>
            {title}
            <button onClick={() => {
                onComplete(parentId, id);
            }}>
                Complete
            </button>
            {childIds.length > 0 &&
                <ol>
                    {childIds.map(childId => (
                        <PlaceTree
                            key={childId}
                            id={childId}
                            parentId={id}
                            placesById={placesById}
                            onComplete={onComplete}
                        />
                    ))}
                </ol>
            }
        </li>
    );
}
