using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Abp.Application.Services.Dto;
using Abp.AutoMapper;

namespace <%= projectName %>.<%= catalogNamePluralize %>.Dto
{
    public class <%= catalogName %>Dto : EntityDto
    {
        public string Name { get; set; }
        public bool IsActive { get; set; }
    }
}
