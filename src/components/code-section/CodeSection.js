import React, { useState, useEffect } from 'react';
import PropType from 'prop-types';
import './codeSection.scss';
import CopyToClipboard from 'react-copy-to-clipboard';

export const CodeSection = ({ code }) => {
	const [copied, setCopied] = useState(false);

	useEffect(() => {
		setTimeout(() => setCopied(false), 2000);
	}, [copied]);

	const formatCode = `${code.replace(/\\n/g, '\n').replace(/\\t/g, '\t')}`;

	return (
		<div className="row">
			<div className="col-md-10">
				<pre className="show-code-snippet">
					<code>{formatCode}</code>
				</pre>
			</div>
			<div className="col-sm-2 copy-button">
				<CopyToClipboard text={formatCode} onCopy={() => setCopied(true)}>
					<button className="copy-button">{copied ? 'Copied!' : 'Copy'}</button>
				</CopyToClipboard>
			</div>
		</div>
	);
};

CodeSection.propTypes = {
	code: PropType.string
};
