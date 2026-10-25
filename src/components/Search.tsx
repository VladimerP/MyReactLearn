import { useState } from 'react';

function Search() {
    const [search, setSearch] = useState('');

    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setSearch(event.currentTarget.value);
    };

    return (
        <div>
            <input
                type="text"
                value={search}
                onChange={handleChange}
            />

            <p>You typed: {search}</p>
        </div>
    );
}

export default Search;