
export default function AddNoteForm() {
	return (
		<form>
			<fieldset>
				<h2>Notes</h2>
				<input type="text" placeholder="title..." />
				<textarea placeholder="notes..." />
			</fieldset>
			<input type="submit" name="insert" value="submit note kamu" />
			<style jsx>{`
				fieldset {
					padding: 1rem;
					display: flex;
					flex-direction: column;
					border: 1px solid black;
					margin: 0.5rem 0;
				}

				fieldset input,
				fieldset textarea {
					margin: 0.5rem 0;
					width: 480px;
					padding: 0.5rem;
				}
			`}</style>
		</form>
	);
}