/*
 * Created by Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/).
 * 10:53 PM -- June 11th, 2019.
 * Project: <name>
 * 
 * <name> - <desc>
 * Copyright (C) 2021 Trevor Sears
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

// import { HTTPServer, IncomingHTTPRequest, OutgoingHTTPResponse } from "@t99/http-server";
import SpotifyWebApi from "spotify-web-api-node";

/**
 * NPM main class used for exporting this package's contents.
 *
 * @author Trevor Sears <trevor@trevorsears.com> (https://trevorsears.com/)
 * @version v0.1.0
 * @since v0.1.0
 */

export async function main(): Promise<void> {
	
	// let server: HTTPServer = await HTTPServer.initialize(1711);
	//
	// server.attachHandler(async (request: IncomingHTTPRequest, response: OutgoingHTTPResponse): Promise<void> => {
	//	
	// 	console.log("Request handled.");
	// 	response.setBody("Hello, world!");
	// 	await response.send();
	//	
	// });
	
	let spotify: SpotifyWebApi = new SpotifyWebApi({
		clientId: "5d34ac821e4a438391f309c37a529b90",
		clientSecret: "a6b0bc3347444d1eab1e4dd4c25d2af9"
	});
	
	console.log(await spotify.getShowEpisodes("5aEsPtN61qhf1mxTrrcgOt"));
	
}

main().catch(console.error);
