import React from 'react';
import Body from '../../layout/Body';
import instance from 'services/axios';

import { useEffect } from 'react';
import { useState } from 'react';

export default function Blog() {
	const [Posts, setPosts] = useState([]);

	const fetchData = async () => {
		await instance
			.get('/api/blog/')
			.then((res) => {
				setPosts(res.data);
				console.log(Posts);
			})
			.catch((err) => {
				console.log('have an error when fetch data from blog: ', err);
			});
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div>
			<Body />
			<div>
				{Posts?.map((post: any) => (
					<li key={post.id}>
						author: {post.author}, content: {post.content}
					</li>
				))}
			</div>
		</div>
	);
}
