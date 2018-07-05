using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace <%= projectName %>.<%= catalogNamePluralize %>.Dto
{
    public class <%= catalogName %>InputDto : PagedResultRequestDto
    {
        public string <%= catalogName %>Name { get; set; }
        public bool? IsActive { get; set; }
    }
}
