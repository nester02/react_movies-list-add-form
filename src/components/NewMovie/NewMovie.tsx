import { useState } from 'react';
import { TextField } from '../TextField';
import { Movie } from '../../types/Movie';

export const NewMovie = ({ onAdd }: { onAdd: (movie: Movie) => void }) => {
  // Increase the count after successful form submission
  // to reset touched status of all the `Field`s
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [imdbUrl, setImdbUrl] = useState('');
  const [imdbId, setImdbId] = useState('');

  const isFormValid = !!(title && imgUrl && imdbUrl && imdbId);

  return (
    <form
      className="NewMovie"
      key={count}
      onSubmit={e => {
        e.preventDefault();
        onAdd({
          title,
          description,
          imgUrl,
          imdbUrl,
          imdbId,
        });
        setTitle('');
        setDescription('');
        setImgUrl('');
        setImdbUrl('');
        setImdbId('');
        setCount(prevCount => prevCount + 1);
      }}
    >
      <h2 className="title">Add a movie</h2>

      <TextField
        name="title"
        label="Title"
        value={title}
        onChange={e => setTitle(e)}
        required
      />

      <TextField
        name="description"
        label="Description"
        value={description}
        onChange={e => setDescription(e)}
      />

      <TextField
        name="imgUrl"
        label="Image URL"
        value={imgUrl}
        onChange={e => setImgUrl(e)}
        required
      />

      <TextField
        name="imdbUrl"
        label="Imdb URL"
        value={imdbUrl}
        onChange={e => setImdbUrl(e)}
        required
      />

      <TextField
        name="imdbId"
        label="Imdb ID"
        value={imdbId}
        onChange={e => setImdbId(e)}
        required
      />

      <div className="field is-grouped">
        <div className="control">
          <button
            disabled={!isFormValid}
            type="submit"
            data-cy="submit-button"
            className="button is-link"
          >
            Add
          </button>
        </div>
      </div>
    </form>
  );
};
