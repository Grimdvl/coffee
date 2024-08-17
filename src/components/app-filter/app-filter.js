import './app-filter.css';

const AppFilter = (props) => {
    const buttonsData = [
        {name: 'all'},
        {name: 'Brazil'},
        {name: 'Kenya'},
        {name: 'Columbia'},
    ];

    const buttons = buttonsData.map(({name}) => {
        const active = props.filter === name;
        const clazz = active ? 'active' : '';
        return (
            <button 
                className={`country--button ${clazz}`}
                type="button"
                key={name}
                onClick={() => props.onFilterSelect(name)}>
            </button>
        )
    });

    return (
        <div id='sort' className="our-coffee__filters--sort">
            <label htmlFor="sort" className='about-text'>Or filter</label>
            {buttons}
        </div>
    );
}

export default AppFilter;