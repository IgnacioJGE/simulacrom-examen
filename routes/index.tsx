import { useSignal } from "@preact/signals";
import { Handlers } from "$fresh/server.ts";
export const handler: Handlers = {
  GET(req, ctx) {
    const headers = new Headers();
    headers.set("location", "/login");
    return new Response(null, {
      status: 303, // Código de estado "See Other" para redirección
      headers,    // Incluye las cabeceras configuradas
    });
  },
};

export default function Home() {

}
