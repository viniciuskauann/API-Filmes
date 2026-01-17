import { AxiosError } from "axios";

export function handleApiError(error: AxiosError) {
  if (error.response) {
    switch (error.response.status) {
      case 401:
        throw new Error("Token inválido ou expirado");
      case 500:
        throw new Error("Erro interno do servidor");
      default:
        throw new Error("Erro inesperado na API");
    }
  }

  if (error.code === "ECONNABORTED") {
    throw new Error("Tempo de conexão excedido");
  }

  throw new Error("Erro de rede. Verifique sua conexão.");
}
