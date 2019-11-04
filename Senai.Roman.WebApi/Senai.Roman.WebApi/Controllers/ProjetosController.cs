using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Senai.Roman.WebApi.Domains;
using Senai.Roman.WebApi.Repositories;

namespace Senai.Roman.WebApi.Controllers
{
    [Route("api/[controller]")]
    [Produces("application/json")]
    [ApiController]
    public class ProjetosController : ControllerBase
    {
        ProjetoRepository projetoRepository = new ProjetoRepository();

        [HttpGet]
        public IActionResult Listar()
        {
            return Ok(projetoRepository.Listar());
        }

        [HttpPost]
        public IActionResult Cadastrar(Projetos projetos)
        {
            try
            {
                projetoRepository.Cadastrar(projetos);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(new { mensagem = "Eita" + ex.Message });
            }
        }
    }
}