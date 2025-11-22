export default {
	async fetch(request, env, ctx): Promise<Response> {
		let url = new URL(request.url)

		if (url.pathname == "/") {
			let responseText = ""
			request.headers.forEach((hVal, hKey) => {
				responseText += `${hKey}: ${hVal}\r\n`
			});
			return new Response(responseText)
		} else {
			return new Response("404")
		}
	},
} satisfies ExportedHandler<Env>;
