import { BeatLoader } from 'react-spinners';
import css from './Loader.module.css';

const Loader = () => {
    return <BeatLoader className={css.loader} color="#150f94" />;
};

export default Loader;
