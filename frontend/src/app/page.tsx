import Log from "./Log";

type Msg = {
	msg: string;
};

async function getData() {
	try {
		const res = await fetch("http://nest-next-docker-backend-1:8000");
		const result: Msg = await res.json();
		return result;
	} catch (err) {
		return err;
	}
}

export default async function Home() {
	const data = await getData();

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<Log data={data} />
		</main>
	);
}
