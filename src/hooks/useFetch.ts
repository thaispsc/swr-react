import useSWR from "swr";
import api from "../services/api";

export function useFetch<Data = any, Error = any>(url: string) {
  const { data, error, mutate } = useSWR<Data, Error>(url, async url => {
    const response = await api.get(url);

    return response.data;
  }, {

  })

  return { data, error, mutate }
}

//esse segundo parametro vai receber a nossa url e ela vai executar a requisição pra api.

//onErrorRetry serve para fazer uma retentativa quando a api da allgum erro.
//erroRetryCount quantas vezes é pra fazer essa retentativa 
//erroRetryInterval a cada quanto tempo fazer essa retentativa
//initialData pra mostrar alguma coisa antes da api carregar
//revalidateOnReconect recarrega os dados caso caia a internet e depois volte