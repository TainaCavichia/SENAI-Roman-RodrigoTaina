using Senai.Roman.WebApi.Domains;
using Senai.Roman.WebApi.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Senai.Roman.WebApi.Repositories
{
    public class UsuarioRepository
    {
        public Professores BuscarPorEmailESenha(LoginViewModel login)
        {
            using (RomanContext ctx = new RomanContext())
            {
                Professores ProfessorBuscado = ctx.Professores.FirstOrDefault(x => x.Email == login.Email && x.Senha == login.Senha);
                if (ProfessorBuscado == null)
                {
                    return null;
                }
                return ProfessorBuscado;
            }
        }
    }
}
