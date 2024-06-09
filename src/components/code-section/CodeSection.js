import React, { useState } from 'react';
import PropType from 'prop-types';
import './codeSection.scss';
import CopyToClipboard from 'react-copy-to-clipboard';

export const CodeSection = ({ code }) => {
	const [copied, setCopied] = useState(false);

	return (
		<div className="row">
			<div className="col">
				<pre className="show-code-snippet">
					<code>{code}</code>
				</pre>
			</div>
			<div className="col copy-button">
				<CopyToClipboard text={code} onCopy={() => setCopied(true)}>
					<button className="copy-button">{copied ? 'Copied!' : 'Copy'}</button>
				</CopyToClipboard>
			</div>
		</div>
	);
};

CodeSection.propTypes = {
	code: PropType.string
};
