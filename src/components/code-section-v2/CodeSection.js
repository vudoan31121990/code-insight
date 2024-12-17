import React, { useState, useEffect } from 'react';
import PropType from 'prop-types';
import CopyToClipboard from 'react-copy-to-clipboard';

export const CodeSection = ({ code }) => {
	const [copied, setCopied] = useState(false);

	useEffect(() => {
		setTimeout(() => setCopied(false), 2000);
	}, [copied]);

	const formatCode = `${code.replace(/\\n/g, '\n').replace(/\\t/g, '\t')}`;

	return (
		<div className="flex flex-row pr-0 relative">
			<div className="flex-[9] p-2 overflow-auto">
				<pre className="text-white sm:text-sm">
					<code>{formatCode}</code>
				</pre>
			</div>
			<div className="flex-[1] text-center text-white">
				<CopyToClipboard text={formatCode} onCopy={() => setCopied(true)}>
					<button className="bg-blue-500 px-3 py-1 rounded shadow-md hover:bg-blue-600 transition">{copied ? 'Copied!' : 'Copy'}</button>
				</CopyToClipboard>
			</div>
		</div>
	);
};

CodeSection.propTypes = {
	code: PropType.string
};
